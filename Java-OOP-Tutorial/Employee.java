class Employee {
    // Attribute
    private String id;
    private String name;
    private Double salary;

    public void setId(String id) {
        this.id = id;
        System.out.println("ID : " + id);
    }

    public void setName(String name) {
        this.name = name;
        System.out.println("Name : " + name);
    }
}