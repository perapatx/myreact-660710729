import React from "react";

function JSXExamples() {
    const greeting = <h1>Hello,React with jsx</h1>
    const name = "Mok";
    const age = 25;

    const currentYear = new Date().getFullYear();

    const user = {
        firstName: 'JackPot',
        lastName: 'LoveTom',
        age: 500,
        hobbies: ['Gay', 'Racirs', 'BigBagBoy']
    };
    const formatName = (user) => {
        return `${user.firstName} ${user.lastName}`;
    };
    const isLoggedIn = true;
    const hasNotification = 3;

    return (
        <div className="jsx-examples">
            <h1>JSX Examples</h1>
            <section>
                <h2>ShowData</h2>
                {greeting}
                <p>HELLO{name} age {age} year</p>
                <p>And this is year {currentYear}</p>
                <p>My Name is {formatName(user)} </p>
            </section>
            <section>
                <h2>Attribute in JSX</h2>
                <div className="card">
                    <p className="text-primary">use className replace the card</p>

                </div>
                <button 
                    onClicK={() => alert('Button Clicked')}
                    onMouseEnter ={() => console.log('Mouse Enter')}>
                    Hover me or click! 
                </button>
            </section>

            <div style={{
                backgroundColor: '#FFFFFF',
                padding: '15px',
                borderRadius: "8px",
                marginTop: '10px'
            }}>
                <p style={{ color: '#2D4A2B', fontWeight: 'bold' }}>Inline style use object</p>
            </div>

            <section>
                <h2>Conditional Rendering</h2>
                <p>Status : {isLoggedIn ? 'Online': 'Offline'}</p>  
                {hasNotification >0 && (
                    <div className="Notification">
                        You has {hasNotification} Notification 
                    </div>
                )}

                {(()=>{
                    if (user.age >= 18){
                        return <p>You are adult</p>
                    }else{
                        return <p>Not Adult</p>
                    }
                })}
            </section>

            
            <section>
                <h2>📋 Lists Show </h2>
                <h3>Hobbies Of {user.firstName}:</h3>
                <ul>
                    {user.hobbies.map((hobby, index) => (
                        <li key={index}>
                            {index + 1}. {hobby}
                        </li>
                    ))}
                </ul>
                
             
                <div className="product-list">
                    <h3>ProductList</h3>
                    {[
                        { id: 1, name: 'Chair', price: 200, inStock: true },
                        { id: 2, name: 'Table', price: 1500, inStock: true },
                        { id: 3, name: 'Projecter', price: 5060, inStock: true },
                        { id: 4, name: 'Bookshelf', price: 1300, inStock: true },
                        { id: 5, name: 'Bottle', price: 30, inStock: false },
                        { id: 6, name: 'Phone', price: 16000, inStock: true },
                        { id: 7, name: 'Door', price: 2000, inStock: true }
                    ].map(product => (
                        <div key={product.id} className="product-item">
                            <span>{product.name}</span>
                            <span> - ฿{product.price.toLocaleString()}</span>
                            <span className={product.inStock ? 'in-stock' : 'out-stock'}>
                                {product.inStock ? ' ✅ มีสินค้า' : ' ❌ สินค้าหมด'}
                            </span>
                        </div>
                    ))}
                </div>
            </section>

             <section>
                <h2>🧩 React Fragment</h2>
                <p>ใช้เมื่อไม่ต้องการ wrapper element:</p>
              
                <React.Fragment>
                    <h3>หัวข้อ</h3>
                    <p>เนื้อหา</p>
                </React.Fragment>
            
                <>
                    <h3>หัวข้ออื่น</h3>
                    <p>เนื้อหาอื่น</p>
                </>
            </section>

            <section>
                <h2>🎯 Event Handling ใน JSX</h2>
                <input 
                    type="Text" 
                    placeholder="Typing Some..."
                    onChange={(e) => console.log('Type:', e.target.value)}
                />
                
                <select onChange={(e) => alert(`Select: ${e.target.value}`)}>
                    <option value="">-- Select Car --</option>
                    <option value="js">Mazda</option>
                    <option value="py">Honda</option>
                    <option value="java">Mercedes</option>
                    <option value="go">BMW</option>
                </select>
            </section>

            <section>
                <h2>💬 Comments ใน JSX</h2>
                {/* นี่คือ comment ใน JSX */}
                <p>Comment ใน JSX ต้องอยู่ใน {/* curly braces */}</p>
                {
                    // นี่ก็เป็น comment เช่นกัน
                    // แต่อยู่ใน JavaScript expression
                }
            </section>


        </div>
    );
}

export default JSXExamples;