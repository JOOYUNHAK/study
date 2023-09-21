import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

/* 그리디 - 동전 0 */
public class p11047 {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        StringTokenizer st = new StringTokenizer(br.readLine(), " ");
        
        int N = Integer.parseInt(st.nextToken());
        int [] money = new int[N];
        int goal = Integer.parseInt(st.nextToken());

        for( int i = 0; i < N; i++ ) {
            money[i] = Integer.parseInt(br.readLine());
        }

        int count = 0;
        int pointer = N - 1;

        while( true ) {
            int currentMoney = money[pointer];
            while(currentMoney <= goal) {
                goal -= currentMoney;
                count++;
            }
            if( goal == 0 ) break;
            pointer -= 1;
        }
        System.out.println(count);
    }
}
