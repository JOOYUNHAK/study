import java.util.*;
import java.io.*;

public class Director {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int n = Integer.parseInt(st.nextToken());

        int number = 666;
        
        int count = 0;

        while( count != n ) {
            if( String.valueOf(number).contains("666") ) 
                count++;
            number++;
        }
        System.out.print(number - 1);
    }
}
