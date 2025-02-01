import { useEffect, useState, useRef, memo } from "react";

const BloodType = () => {
    const [data, setData] = useState([]);
    const [dataList, setDataList] = useState(null);
    const [isCreateList, setIsCreateList] = useState(false);

    const inputRefs = useRef([]);

    const url = (address) => { return `http://localhost:3003${address}`; }

    const handleClick = () => { setIsCreateList(true); }
    const updateData = (itemId, inputJSX) => {
        const [name, blood_type, description] = [
            inputJSX[0].value,
            inputJSX[1].value,
            inputJSX[2].value
        ]

        fetch(url("/update"), {
            method: "POST",
            headers: { 
                "Content-Type": "application/json" 
            },
            body: JSON.stringify({ id: itemId, name: name, blood_type: blood_type, description: description })
        })
            .then((response) => console.log("UPDATE DONE"))
            .then(() => { getData()})
            .catch((err) => { console.log("update_ERR: ", err) })
    };

    /* DATA 삭제하기 */
    const deleteDate = (itemId) => {
        console.log(itemId)
        fetch(url("/delete"), {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id: itemId })
        })
            .then((response) => console.log("Delete DONE"))
            .then(() => { getData() })
            .catch((err) => console.log("delete_ERR: ", err))
    }

    /* DATA 가져오기 */
    const getData = () => {
        fetch(url("/bloodType"))
            .then((response) => response.json())
            .then((resData) => { setData(resData); })
            .catch((err) => { console.log("bloodType_ERR: ", err) })
    }

    const inputChange = (row, col, value) => {
        inputRefs.current[row][col].value = value;
    }

    useEffect(() => { getData(); }, []);



    useEffect(() => {
        const list = data.map((item, i) => {
            return (<div key={`${i}`}>
                <input type="text" defaultValue={`${item["id"]}`} readOnly />

                {/* ================= */}

                <input type="text" defaultValue={`${item["name"]}`}
                    ref={(element) => {
                        if (!inputRefs.current[i]) inputRefs.current[i] = [];
                        inputRefs.current[i][0] = element;
                    }}
                    onChange={(e) => {
                        inputChange(i, 0, e.target.value);
                    }}
                />

                <input type="text" defaultValue={`${item["blood_type"]}`}
                    ref={(element) => {
                        if (!inputRefs.current[i]) inputRefs.current[i] = [];
                        inputRefs.current[i][1] = element;
                    }}
                    onChange={(e) => { }}
                />

                <input type="text" defaultValue={`${item["description"]}`}
                    ref={(element) => {
                        if (!inputRefs.current[i]) inputRefs.current[i] = [];
                        inputRefs.current[i][2] = element;
                    }}
                    onChange={(e) => { }}
                />

                {/* ================= */}

                <button onClick={() => {
                    updateData(item["id"], inputRefs.current[i]);
                    console.log(item["id"], inputRefs.current[i])
                }}>수정</button>
                <button onClick={() => {
                    deleteDate(item["id"]);
                }}>삭제</button>
            </div>)
        });
        setDataList(list);
    }, [data]);


    return (
        <section>
            <h1>Blood Type List</h1>
            <article>
                <div>
                    <input type="text" value="ID" />
                    <input type="text" value="NAME" />
                    <input type="text" value="BLOOD TYPE" />
                    <input type="text" value="DESCRIPTION" />
                </div>
                <div>
                    {dataList}
                </div>
                <hr />
                {(!isCreateList) && (<button onClick={handleClick}>create</button>)}
                {(isCreateList) && (<CreateList />)}
            </article>
        </section>
    )
}

const CreateList = () => {
    return (
        <>
            <form action="http://localhost:3003/saveInfo" method="POST">
                {/* <p><label>ID: </label><input type="text" disabled /></p> */}
                <p><label>NAME: </label><input type="text" name="name" placeholder="이름" /></p>
                <label>BLOOD TYPE: </label>
                <select name="blood_type">
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="O">O</option>
                    <option value="AB">AB</option>
                </select>
                <p><label>DESCRIPTION: </label><input type="text" placeholder="설명" name="description" /></p>
                <input type="submit" value="저장" />
            </form>
        </>
    )
}

export default BloodType;