import { useEffect, useState, useRef, memo } from "react";

// 🔹 `EditableRow`를 `memo`로 감싸 리렌더링 최소화
const EditableRow = memo((props) => {
    const { item, index, editableIndex, handleInputChange, updateData, deleteData } = props;
    const inputRefs = useRef([]); // 각 행의 input 요소를 저장할 ref

    return (
        <div key={item.id}>
            <input type="text" value={item.id} readOnly />

            <input
                type="text"
                name="name"
                value={item.name}
                ref={(el) => (inputRefs.current[0] = el)}
                onChange={(e) => handleInputChange(index, "name", e.target.value)}
                readOnly={editableIndex !== index}
            />

            <input
                type="text"
                name="blood_type"
                value={item.blood_type}
                ref={(el) => (inputRefs.current[1] = el)}
                onChange={(e) => handleInputChange(index, "blood_type", e.target.value)}
                readOnly={editableIndex !== index}
            />

            <input
                type="text"
                name="description"
                value={item.description}
                ref={(el) => (inputRefs.current[2] = el)}
                onChange={(e) => handleInputChange(index, "description", e.target.value)}
                readOnly={editableIndex !== index}
            />

            <button onClick={() => updateData(index)}>수정</button>
            <button onClick={() => deleteData(item.id)}>삭제</button>
        </div>
    );
});

const BloodType = () => {
    const [data, setData] = useState([]); // 대량 데이터를 관리할 상태
    const [editableIndex, setEditableIndex] = useState(null); // 수정 가능한 행

    const url = (address) => `http://localhost:3003${address}`;

    useEffect(() => {
        getData();
    }, []);

    // 🔹 서버에서 데이터 가져오기
    const getData = () => {
        fetch(url("/bloodType"))
            .then((response) => response.json())
            .then((resData) => {
                setData(resData || []);
            })
            .catch((err) => console.log("bloodType_ERR:", err));
    };

    // 🔹 특정 행을 수정 가능하게 설정
    const updateData = (index) => {
        setEditableIndex(index);
    };

    // 🔹 특정 필드 값만 업데이트 (리렌더링 최소화)
    const handleInputChange = (index, field, value) => {
        setData((prevData) =>
            prevData.map((item, i) =>
                i === index ? { ...item, [field]: value } : item // 변경된 값만 업데이트
            )
        );
    };

    // 🔹 데이터 삭제 기능
    const deleteData = (itemId) => {
        fetch(url("/delete"), {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: itemId })
        })
            .then((response) => response.json())
            .then(() => getData()) // 삭제 후 데이터 다시 불러오기
            .catch((err) => console.log("delete_ERR:", err));
    };

    return (
        <section>
            <h1>Blood Type List</h1>
            <article>
                <div>
                    <input type="text" value="ID" readOnly />
                    <input type="text" value="NAME" readOnly />
                    <input type="text" value="BLOOD TYPE" readOnly />
                    <input type="text" value="DESCRIPTION" readOnly />
                </div>
                <div>
                    {data.length > 0 ? (
                        data.map((item, i) => (
                            <EditableRow
                                key={item.id}
                                item={item}
                                index={i}
                                editableIndex={editableIndex}
                                handleInputChange={handleInputChange}
                                updateData={updateData}
                                deleteData={deleteData}
                            />
                        ))
                    ) : (
                        <p>데이터가 없습니다.</p>
                    )}
                </div>
            </article>
        </section>
    );
};

// 🔹 신규 데이터 입력 폼
const CreateList = () => {
    return (
        <>
            <form action="http://localhost:3003/saveInfo" method="POST">
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
    );
};

export default BloodType;
