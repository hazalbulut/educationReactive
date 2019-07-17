import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-example',
    templateUrl: './example.component.html',
    styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
    public numbers: number[] = [8, 9, 10, -2];
    public numbers2: number[] = [10, 20, 10, 20];
    public colors: string[] = ["Red", "Green", "Blue"];
    public sArray: number[] = [];

    constructor() { }

    ngOnInit() {
        this.isArray("this is a string");
        this.isArray([1, 2, 3]);
        this.getFirstElement();
        this.getFirstNthElement();
        this.getLastElement();
        this.getLastElement2();
        this.getLastNthElement();
        this.joinAll();
        this.joinAllWithSeperator();
        this.sort();
        this.frequent();
        this.frequent2();
        this.sum();
        this.searchIndex(9);
        this.sumArray();
        this.union();
        this.removeNulls([NaN, 0, 15, false, -22, '', undefined, 47, null]);
        this.removeArrayElement();
        this.removeArrayElement2();
        this.twoArray();
        this.getRandomArray();
        this.getRandom();
        this.shuffle();
        this.shuffle2();
    }
    //array mi?
    public isArray(array: any) {
        if (array.constructor === Array) {
            console.log("array mi?", true);
        }
        else {
            console.log("array mi?", false);
        }
    }

    //İlk elementi getir.
    public getFirstElement() {
        console.log(this.numbers[0])
    }

    //ilk 3.elementi getir.
    public getFirstNthElement() {
        console.log(this.numbers.slice(0, 3));
    }

    //Son Elementi getir.
    public getLastElement() {
        let numbers: number[] = [8, 9, 10, -2];
        console.log(this.numbers[this.numbers.length - 1]);
    }

    public getLastElement2() {
        let numbers: number[] = [8, 9, 10, -2];
        let num = numbers.pop();
        console.log(num, "son elementi getirir2");
    }
    //Son 3 elementi getir.
    public getLastNthElement() {
        console.log(this.numbers.slice(-3));
    }
    //arrayden çıkar
    public joinAll() {
        console.log(this.colors.join(), "arraydan çıkar");
    }

    //arrayden çıkarıp obje aralarına + koy.
    public joinAllWithSeperator() {
        console.log(this.colors.join(" + "))
    }
    //number array sırala
    public sort() {
        console.log(this.numbers.sort(function (a, b) { return a - b }));
    }

    //en çok bulunan element ve sayısı
    public frequent() {
        let arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
        arr1.sort();
        for (let i = 0; i < arr1.length; i++) {
            var mostFrequnet = null;
            var mostFrequnetItem;
            var single = arr1[i];
            var total = (arr1.lastIndexOf(single) - arr1.indexOf(single)) + 1;

            if (total > mostFrequnet) {
                mostFrequnetItem = arr1[i];
                mostFrequnet = total;
                i = arr1.lastIndexOf(single) + 1;
            }
        }
        console.log(mostFrequnetItem + "(" + mostFrequnet + ")");
    }


    public frequent2() {
        const arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
        let mostFrequent = 1;
        let m = 0;
        let item;
        for (let i = 0; i < arr1.length; i++) {
            for (let j = i; j < arr1.length; j++) {
                if (arr1[i] == arr1[j]) {
                    m++;
                }
                if (mostFrequent < m) {
                    mostFrequent = m;
                    item = arr1[i];
                }
            }
            m = 0;
        }
        console.log(item + " ( " + mostFrequent + " times ) ", "En çok tekrarlanma sayısı");
    }
    //array içerisindeki tüm sayıların toplamı
    public sum() {
        console.log(this.numbers.reduce((a, b) => a + b, 0), "array içerisindeki tüm sayıların toplamı");

    }
    //seçili elemenın indexi
    public searchIndex(sayi: number) {
        console.log(this.numbers.findIndex(index => index === sayi), "seçili elemenın indexi");
    }

    //indexler toplamı
    public sumArray() {
        let arr = [8, 9, 10, -2]
        for (let i = 0; i < arr.length; i++) {
            this.sArray.push(arr[i] + this.numbers2[i]);
        }
        console.log(this.sArray, "indexler toplamı");
    }

    //kümenin elemanlarını birleştirme
    public union() {
        let a = new Set([1, 2, 3]);
        let b = new Set([4, 3, 2]);
        console.log(new Set([...a, ...b]));
    }

    //null,undefined,boşluk ve 0 değerleri silme
    public removeNulls(arr: any[]) {
        var arr = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i]) {
                arr.push(arr[i]);
            }
        }
        console.log(arr, "null,undefined,boşluk ve 0 değerleri silme");
    }


    //seçili array elemntini arrayden çıkartma
    public removeArrayElement() {
        let arr1: number[] = [2, 5, 9, 6];
        let num: number = 5;
        let empty: number[] = [];
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== num) {
                empty.push(arr1[i])
            }
        }
        console.log(empty, "seçili array elemntini arrayden silme");
    }

    public removeArrayElement2() {
        let arr1: number[] = [2, 5, 9, 6];
        let num: number = 5;
        arr1.splice(arr1.findIndex(index => index === num), 1);
        console.log(arr1), "seçili array elemntini arrayden silme2";
    }

    //arrayi iki parçaya ayırmak
    public twoArray() {
        let arr1: number[] = [2, 5, 9, 6];
        let empty: number[] = [];
        for (let i = 0; i < arr1.length / 2; i++) {
            empty.push(arr1[i]);
        }
        empty = arr1.splice(0, arr1.length / 2)
        console.log(empty, arr1, "arrayi iki parçaya ayırmak");
    }

    //0-9 arasında rastgele elemanlardan oluşmuş 4 elemanlı array yapma
    public getRandomArray() {
        let empty: number[] = [];
        const sayi: number = 4;

        for (let i = 0; i < sayi; i++) {
            empty.push(Math.floor(Math.random() * 10));
        }
        console.log(empty, "0-9 arasında rastgele elemanlardan oluşmuş 4 elemanlı array yapma");
    }

    //arrayden rastgele eleman getirilmesi
    public getRandom() {
        let arr1: string[] = ["Red", "Green", "Blue"];
        let arrIndex: number;
        arrIndex = Math.floor(Math.random() * arr1.length);
        console.log(arr1.slice(arrIndex, arrIndex + 1), "arrayden rastgele eleman getirilmesi");
    }

    //array elemanlarını rastgele karıştırma
    public shuffle() {
        let arr1: string[] = ["Red", "Green", "Blue"];
        let empty: string[] = [];
        let arrIndex: number;
        for (let i = -2; i < arr1.length; i++) {
            arrIndex = Math.floor(Math.random() * arr1.length);
            empty.push(arr1[arrIndex]);
            arr1.splice(arrIndex, 1);

        }
        console.log(empty, "array elemanlarını rastgele karıştırma");
    }

    public shuffle2() {
        //let arr: string[] = ["Red", "Green", "Blue"];
        let arr: string[] = ["Red", "Green", "Blue", "Yellow"];
        for (let i = 0; i < 500; i++) {
            const a = Math.floor(Math.random() * arr.length);
            arr.push(...arr.splice(a, 1));
        }
        console.log(arr, "test");
    }


}
