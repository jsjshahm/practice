import java.util.Scanner;

public class Main{
    public static void main(String args[]){
        double A, B;
        Scanner scan = new Scanner(System.in);
        
        A = scan.nextDouble();
        B = scan.nextDouble();
        
        System.out.println(A / B);
        scan.close();
    }
}