import java.io.BufferedReader;
import java.io.InputStreamReader;

/* dp - 피보나치 수 1 */
public class p24416 {
    public static int count1, count2 = 0;
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        
        int N = Integer.parseInt(br.readLine());
        fib(N); memo(N);
        System.out.println(count1 + " " + count2);
    }

    public static int fib(int n) {
        if( n == 1 || n == 2) {
            count1++;
            return 1;
        }
        return fib(n - 2) + fib(n - 1);
    }

    public static int memo(int n) {
        int arr[] = new int[n+1];
        arr[1] = arr[2] = 1;

        for( int i = 3; i <= n; i++ ) {
            count2++;
            arr[i] = arr[i-2] + arr[i-1];
        }
        return arr[n];
    }
}
