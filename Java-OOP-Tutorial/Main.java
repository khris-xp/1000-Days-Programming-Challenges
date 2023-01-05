public class Main {
    public static void main(String[] args) {
        // Create Object
        Employee e1 = new Employee("1", "Khris Bharmmano", 18000.0);
        e1.displayEmployee();
        Employee e2 = new Employee("2", "John Doe", 20000.0);
        e2.displayEmployee();

        // Exercise
        System.out.println("Name of Employee 1 : " + e1.getName());
        System.out.println("Salary of Employee 2 : " + e2.getSalary());
    }
}