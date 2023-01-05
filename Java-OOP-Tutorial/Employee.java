class Employee {
    // Attribute
    private String id;
    private String name;
    private Double salary;

    // Default Constructor

    public Employee(String id, String name, Double salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    // Setter
    public void setId(String id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setSalary(Double salary) {
        this.salary = salary;
    }

    public void displayEmployee() {
        System.out.println("ID : " + this.id);
        System.out.println("Name : " + this.name);
        System.out.println("Salary : " + this.salary);
    }

    // Getter
    public String getId() {
        return this.id;
    }

    public String getName() {
        return this.name;
    }

    public Double getSalary() {
        return this.salary;
    }

}