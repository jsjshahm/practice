import java.util.Scanner;

public class Main{
    public static void main(String args[]){
        double A, B, division;
        Scanner scan = new Scanner(System.in);
        
        A = scan.nextDouble();
        B = scan.nextDouble();
        division = A / B;
        
        System.out.println(division);
        scan.close();
    }
}