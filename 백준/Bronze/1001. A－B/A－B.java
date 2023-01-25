import java.util.Scanner;

public class Main{
    public static void main(String args[]){
        int A, B, minus;
        Scanner scan = new Scanner(System.in);
        
        A = scan.nextInt();
        B = scan.nextInt();
        minus = A - B;
        
        System.out.println(minus);
        scan.close();
    }
}