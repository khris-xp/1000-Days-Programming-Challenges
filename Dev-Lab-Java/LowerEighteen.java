import java.util.Scanner;

public class LowerEighteen {
    public static void main(String[] args) {
        Scanner myInput = new Scanner(System.in);

        String username = myInput.nextLine();
        int age = myInput.nextInt();

        if (2020 - age >= 18) {
            System.out.println("Welcome " + username + " to NongGipsy Pub");
        } else if (2020 - age < 18) {
            System.out.println("You shall not pass!");
        }
    }
}
