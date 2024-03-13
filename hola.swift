
class ViewController: UIViewController {

    // Definir los elementos de la interfaz
    let numeroTextField: UITextField = {
        let textField = UITextField()
        textField.placeholder = "Ingrese un número"
        textField.borderStyle = .roundedRect
        textField.translatesAutoresizingMaskIntoConstraints = false
        return textField
    }()
    
    let botonAceptar: UIButton = {
        let button = UIButton(type: .system)
        button.setTitle("Aceptar", for: .normal)
        button.translatesAutoresizingMaskIntoConstraints = false
        button.addTarget(self, action: #selector(botonAceptarTapped), for: .touchUpInside)
        return button
    }()
    
    // Método para manejar el evento cuando se presiona el botón
    @objc func botonAceptarTapped() {
        guard let numeroText = numeroTextField.text, let numero = Int(numeroText) else {
            // Manejar el caso en que el usuario no haya ingresado un número válido
            print("Por favor, ingrese un número válido.")
            return
        }
        
        // Aquí puedes hacer algo con el número ingresado, por ejemplo, mostrarlo en la consola
        print("Número ingresado: \(numero)")
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        // Configurar la interfaz de usuario
        view.addSubview(numeroTextField)
        view.addSubview(botonAceptar)
        
        NSLayoutConstraint.activate([
            // Posicionamiento del campo de texto
            numeroTextField.centerXAnchor.constraint(equalTo: view.centerXAnchor),
            numeroTextField.centerYAnchor.constraint(equalTo: view.centerYAnchor),
            numeroTextField.widthAnchor.constraint(equalToConstant: 200),
            // Posicionamiento del botón
            botonAceptar.topAnchor.constraint(equalTo: numeroTextField.bottomAnchor, constant: 20),
            botonAceptar.centerXAnchor.constraint(equalTo: view.centerXAnchor)
        ])
    }
}
