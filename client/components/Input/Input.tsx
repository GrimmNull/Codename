import styles from "./Input.module.scss";
import {FunctionComponent, useEffect, useId, useRef, useState} from "react";
import clsx from "clsx";

interface IInputProps {
    id?: string;
    name?: string;
    value: string;
    onChange: (value: string, name?: string) => void;
    onFinish?: () => void;
    disabled?: boolean;
    isDisappearing?: boolean;
    shouldFocusOnMount?: boolean;
    labelClasses?: string;
    wrapperClasses?: string;
    inputClasses?: string;
}

export const Input: FunctionComponent<IInputProps> = (props) => {
    const {
        id = "",
        name = "",
        value,
        onChange,
        onFinish = () => {
        },
        disabled = false,
        isDisappearing = false,
        shouldFocusOnMount = false,
        inputClasses = "",
        wrapperClasses = "",
        labelClasses = ""
    } = props;
    const [actualId, setActualId] = useState(id);
    const [inputFocused, setInputFocused] = useState(false);
    const uniqueId = useId();
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (!actualId) {
            setActualId(uniqueId);
        }
    }, []);

    useEffect(() => {
        if (inputRef.current && shouldFocusOnMount) {
            inputRef.current.focus();
        }
    }, [inputRef]);

    return <div className={clsx(styles.wrapper, wrapperClasses)}>
        {name && <label htmlFor={actualId}
                        className={clsx(styles.label, labelClasses, {[styles.minimized]: inputFocused || value.length > 0})}>{name}:</label>}
        <input id={actualId}
            ref={inputRef}
            className={clsx(styles.input, inputClasses, {[styles.inputFocused]: inputFocused})}
            value={value}
            disabled={disabled}
            onChange={(ev) => onChange(ev.target.value, name)}
            onFocus={() => setInputFocused(true)}
            onBlur={() => setInputFocused(false)}
            onKeyDown={(ev) => {
                if (ev.code === "Enter") {
                    onFinish();
                }
            }}
        />
    </div>
}