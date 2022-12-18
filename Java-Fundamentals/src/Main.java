import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner myInput = new Scanner(System.in);

        System.out.print("Your Price : ");
        double firstPrice = myInput.nextDouble();
        double finalPrice;

        if (firstPrice > 10000) {
            finalPrice = firstPrice - (0.15 * firstPrice);
            System.out.println("Final Price : " + finalPrice);
        } else if (firstPrice > 6000 && firstPrice < 10000) {
            finalPrice = firstPrice - (0.1 * firstPrice);
            System.out.println("Final Price : " + finalPrice);
        } else if (firstPrice > 3000 && firstPrice < 6000) {
            finalPrice = firstPrice - (0.08 * firstPrice);
            System.out.println("Final Price : " + finalPrice);
        } else {
            finalPrice = firstPrice - (0.05 * firstPrice);
            System.out.println("Final Price : " + finalPrice);
        }
    }
}