import java.util.*;

public class UserHistorySommai {
    public static void main(String[] args) {
        Scanner myInput = new Scanner(System.in);

        String firstName = myInput.nextLine();
        String lastName = myInput.nextLine();
        String address = myInput.nextLine();
        String gender = myInput.nextLine();
        String tel = myInput.nextLine();

        System.out.println("--- Customer Detail ---");
        System.out.println("Name : " + firstName + " " + lastName);
        System.out.println("Address : " + address);
        System.out.println("Gender : " + gender);
        System.out.println("Tel : " + tel);
    }
}
