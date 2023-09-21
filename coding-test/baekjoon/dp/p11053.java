import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

/* dp - 가장 긴 증가하는 부분 수열 */
public class p11053 {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());

        int [] arr = new int[N];

        StringTokenizer st = new StringTokenizer(br.readLine(), " ");
        
        for( int i = 0; i < N; i++ ) {
            arr[i] =Integer.parseInt(st.nextToken());
        }

        int [] dp = new int[N];

        dp[0] = 1;

        for( int i = 1; i < N; i++ ) {
            dp[i] = 1;
            for( int j = 0; j < i; j++ ) {
                if( arr[i] > arr[j] && dp[i] < dp[j] + 1) {
                    dp[i] = dp[j] + 1;
                }
            }
        }

        int max = 0;

        for( int i = 0; i < N; i++ ) {
            max = max > dp[i] ? max : dp[i];
        }

        System.out.println(max);
    }
}
