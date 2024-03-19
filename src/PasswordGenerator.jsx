import React, { useState } from 'react';

export const PasswordGenerator = () => {
    const [length, setLength] = useState(8);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeLowercase, setIncludeLowercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSpecial, setIncludeSpecial] = useState(true);
    const [password, setPassword] = useState("");

    const generatePassword = () => {
        let charset = "";
        if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
        if (includeNumbers) charset += "0123456789";
        if (includeSpecial) charset += "!@#$%=/&*+_-\"";
        let generatedpassword = "" ;
        console.log(charset);
        for (let i=0; i<length; i++){
            const randomindex = Math.floor(Math.random()*charset.length);
            generatedpassword += charset[randomindex];
        }
        setPassword(generatedpassword);
    }

    const CopyToClipboard = () => {
        navigator.clipboard.writeText(password);
        alert("Password Copied")
    }

    return (
        <div className='password-generator'>
            <h2>Strong Password Generator</h2>
            <div className="input-group">
                <label htmlFor='num'>Password Length : </label>
                <input type="number" id="num" value={length} onChange={(e) => setLength(parseInt(e.target.value))} />
            </div>

            <div className="checkbox-group">
                <input type="checkbox" id='upper' checked={includeUppercase} onChange={(e) => setIncludeUppercase(e.target.checked)} />
                <label htmlFor="upper">Include UpperCase</label>
            </div>

            <div className="checkbox-group">
                <input type="checkbox" id='lower' checked={includeLowercase} onChange={(e) => setIncludeLowercase(e.target.checked)} />
                <label htmlFor="lower">Include LowerCase</label>
            </div>

            <div className="checkbox-group">
                <input type="checkbox" id='numbers' checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)} />
                <label htmlFor="numbers">Include Numbers</label>
            </div>

            <div className="checkbox-group">
                <input type="checkbox" id='special' checked={includeSpecial} onChange={(e) => setIncludeSpecial(e.target.checked)} />
                <label htmlFor="special">Include Special Characters</label>
            </div>

            <button className='generate-btn' onClick={generatePassword}>Generate Password</button>

            <div className="generated-password">
                <input type="text" readOnly value={password} />
                <button className='copy-btn' onClick={CopyToClipboard}>Copy</button>
            </div>

        </div>
    );
}

export default PasswordGenerator;
