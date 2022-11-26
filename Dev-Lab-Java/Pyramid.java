import java.util.Scanner;

class Pyramid {
    public static void main(String[] args) {

        Scanner myInput = new Scanner(System.in);

        int RowColumn = myInput.nextInt();

        for (int i = 0; i < RowColumn; i++) {
            for (int j = 0; j < RowColumn; j++) {
                if (i >= j) {
                    System.out.print("*");
                } else {
                    System.out.print(" ");
                }
            }
            System.out.println();
        }
    }
}