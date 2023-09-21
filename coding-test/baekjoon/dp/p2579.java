import java.io.BufferedReader;
import java.io.InputStreamReader;

/* dp - 계단 오르기 */
/* 마지막을 반드시 밟아야 할 때 누적된합, 그렇지 않으면 바로 전 dp값하고 비교해서 큰거로 갱신 */
public class p2579 {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());
        
        int arr[] = new int[N + 1];
        int dp[] = new int[N + 1];

        for( int i = 1; i <= N; i++ ) {
            int score = Integer.parseInt(br.readLine());
            arr[i] = score;
        }
    
        dp[1] = arr[1];

        if( N >= 2 )
            dp[2] = arr[1] + arr[2];

        for( int i = 3; i <= N; i++ ) {
            dp[i] = Math.max(dp[i - 2], dp[i -3] + arr[i -1 ]) + arr[i];
        }

        System.out.println(dp[N]);
    }
}
