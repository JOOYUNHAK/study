import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.Comparator;
import java.util.StringTokenizer;

/* 그리디 - 회의실 배정 */
public class p1931 {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());

        int [][] time = new int[N][2];

        for( int i = 0; i < N; i++ ) {
            StringTokenizer st = new StringTokenizer(br.readLine(), " ");
            
            int start = Integer.parseInt(st.nextToken());
            int end = Integer.parseInt(st.nextToken());

            time[i][0] = start; time[i][1] = end;
        }

        Arrays.sort(time, new Comparator<int []>() {
            @Override
            public int compare(int [] o1, int [] o2) {
                if( o1[1] == o2[1] ) return o1[0] - o2[0];
                return o1[1] - o2[1];
            }
        });

        int preEndTime = 0; int count = 0;

        for( int i = 0; i < N; i++ ) {
            if( preEndTime <= time[i][0] ) {
                preEndTime = time[i][1];
                count++;
            }
        }

        System.out.println(count);
    }
}
