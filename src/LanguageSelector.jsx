import { useLanguage } from "./LanguageContext";

const LanguageSelector = () => {
    const { languaje, changeLanguage } = useLanguage();

    const handleChangeLanguage = (e) => {
        changeLanguage(e.target.value);
    }

    return (
        <>
            <label>Select Language:</label>
            <select value={languaje} onChange={handleChangeLanguage}>
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
            </select>
        </>
    )
}

export default LanguageSelector;