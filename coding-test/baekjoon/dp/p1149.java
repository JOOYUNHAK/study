import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

/* dp - RGB 거리 */
public class p1149 {
    private final static int RED = 0;
    private final static int GREEN = 1;
    private final static int BLUE = 2;
    private static StringTokenizer st;
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());

        int dp [][] = new int[N][3];
        
        st = new StringTokenizer(br.readLine(), " ");
        
        dp[0][RED] = Integer.parseInt(st.nextToken());
        dp[0][GREEN] = Integer.parseInt(st.nextToken());
        dp[0][BLUE] = Integer.parseInt(st.nextToken());

        for( int i = 1; i < N; i++ ) {
            st = new StringTokenizer(br.readLine(), " ");

            int currentRed = Integer.parseInt(st.nextToken());
            int currentGreen = Integer.parseInt(st.nextToken());
            int currentBlue = Integer.parseInt(st.nextToken());

            int preGreen = dp[i-1][GREEN];
            int preRed = dp[i-1][RED];
            int preBlue = dp[i-1][BLUE];

            dp[i][RED] = Math.min(preBlue, preGreen) + currentRed;
            dp[i][GREEN] += Math.min(preRed, preBlue) + currentGreen;
            dp[i][BLUE] += Math.min(preRed, preGreen) + currentBlue;
        }
        System.out.println(Math.min(dp[N-1][RED], (Math.min(dp[N-1][BLUE], dp[N-1][GREEN]))));
    }
}
