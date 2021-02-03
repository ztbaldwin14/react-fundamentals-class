import { useState } from 'react';

const TenLittleMonkeys = () => {
    const [count, setCount] = useState(10)

    function handleClick() {
        //subtract count
        if (count !== 0) {
            setCount(count - 1);
        }

    }

    return (
        <div>
            <p>
                {count !== 0 ? `${count} little monkeys jumping on the bed. One fell off and bumped his head. Momma called the doctor and the doctor said, "No more monkeys jumping on the bed!".` : "No more able-bodied monkeys remaining!"}
            </p>
            <button onClick={handleClick}>Click Here</button>
        </div>
    )
}

export default TenLittleMonkeys;