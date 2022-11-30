import java.util.Scanner;

public class NotAFebuary {
    public static void main(String[] args) {
        Scanner myInput = new Scanner(System.in);

        int year = myInput.nextInt();
        if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
            System.out.println("Leap Year");
        } else {
            System.out.println("Not a Leap Year");
        }
    }
}