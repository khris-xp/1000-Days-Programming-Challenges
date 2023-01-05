public class Main {
    public static void main(String[] args) {
        // Create Object
        Employee e1 = new Employee();
        e1.setId("12345");
        e1.setName("Khris Bharmmano");
        e1.setSalary(30000.0);
        System.out.println(e1.getName());

        // Create Object
        Employee e2 = new Employee();
        e2.setId("67890");
        e2.setName("John Doe");
        e2.setSalary(20000.0);
        System.out.println(e2.getSalary());
    }
}
