

export default function Pie() {
  const handleSubmit = e => {
    e.preventDefault();
    console.log("submit contacto");
  }
  return (
    <div id="pie" className="min-h-screen">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nombre" required/>
        <input type="email" placeholder="email" required/>
        <textarea cols="30" rows="10" placeholder="Mensaje" required></textarea>
        <button>Submit</button>
      </form>
    </div>
  )
}
