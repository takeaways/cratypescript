import * as React from "react";
import * as Styles from "./styles";
import { MdSave } from 'react-icons/md'
import { useDispatch } from "react-redux";
import { REQUEST_UPDATE_POST } from "../../../Reducer/post/actionNames";
const Edit: React.FunctionComponent<{ text: string, id: number, setShow: (value: boolean) => void }> = ({ text, id, setShow }) => {

    const dispatch = useDispatch();

    const myEditor = React.useRef<HTMLTextAreaElement>(null);

    const [editText, setEditText] = React.useState(text);
    const onEdit = React.useCallback((e) => setEditText(e.target.value), []);
    const onSave = React.useCallback(() => {
        dispatch({
            type: REQUEST_UPDATE_POST,
            data: {
                id,
                text: editText
            }

        })
        setShow(true);
    }, [editText]);

    React.useEffect(() => {
        if (myEditor.current && text) {
            myEditor.current!.focus();
        }

    }, [])
    return (
        <Styles.EditForm>
            <Styles.Save onClick={onSave} title="저장"><MdSave title="저장" /></Styles.Save>
            <Styles.Editor ref={myEditor} value={editText} onChange={onEdit}>
                {editText}
            </Styles.Editor>
        </Styles.EditForm>
    )

}

export default Edit