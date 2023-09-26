import "./Form.css"

const Form = () => {
  return (
    <div className="form">
        <div className="formClientBox">
            <p className="userName">userName</p>
            <p className="userMessage">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis sapiente exercitationem aperiam autem? Aperiam sed eligendi dolores. Molestiae ea ipsum odio distinctio pariatur consectetur debitis corrupti, harum eligendi nobis consequatur.</p>
        </div>
        <div className="formReplyBox">
            <p className="companyName">CompanyName</p>
            <p className="companyMessage">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor quod, doloribus totam ratione iste unde maiores aut sit incidunt pariatur officia consequuntur voluptas reprehenderit vitae nam odio, quia nulla eius!</p>
        </div>
        <div className="formMessageBox">
            <form action="">
                <input className="inputForMessage" type="text" />
                <input className="submit" type="submit" />
            </form>
        </div>
    </div>
  )
}

export default Form