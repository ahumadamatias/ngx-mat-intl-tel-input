import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class SearchPipe {
    // country | search:'searchCriteria'
    transform(country, searchCriteria) {
        if (!searchCriteria || searchCriteria === '') {
            return true;
        }
        return `${country.name}+${country.dialCode}`
            .toLowerCase()
            .includes(searchCriteria.toLowerCase());
    }
    static ɵfac = function SearchPipe_Factory(t) { return new (t || SearchPipe)(); };
    static ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "search", type: SearchPipe, pure: true, standalone: true });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SearchPipe, [{
        type: Pipe,
        args: [{
                name: 'search',
                standalone: true,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbWF0LWludGwtdGVsLWlucHV0L3NyYy9saWIvc2VhcmNoLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBUXBELE1BQU0sT0FBTyxVQUFVO0lBQ3JCLG9DQUFvQztJQUNwQyxTQUFTLENBQUMsT0FBZ0IsRUFBRSxjQUF1QjtRQUNqRCxJQUFJLENBQUMsY0FBYyxJQUFJLGNBQWMsS0FBSyxFQUFFLEVBQUU7WUFDNUMsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELE9BQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxRQUFRLEVBQUU7YUFDekMsV0FBVyxFQUFFO2FBQ2IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQzVDLENBQUM7b0VBVlUsVUFBVTt5RUFBVixVQUFVOzt1RkFBVixVQUFVO2NBSnRCLElBQUk7ZUFBQztnQkFDSixJQUFJLEVBQUUsUUFBUTtnQkFDZCxVQUFVLEVBQUUsSUFBSTthQUNqQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ291bnRyeSB9IGZyb20gJy4vbW9kZWwvY291bnRyeS5tb2RlbCc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ3NlYXJjaCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgLy8gY291bnRyeSB8IHNlYXJjaDonc2VhcmNoQ3JpdGVyaWEnXG4gIHRyYW5zZm9ybShjb3VudHJ5OiBDb3VudHJ5LCBzZWFyY2hDcml0ZXJpYT86IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghc2VhcmNoQ3JpdGVyaWEgfHwgc2VhcmNoQ3JpdGVyaWEgPT09ICcnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gYCR7Y291bnRyeS5uYW1lfSske2NvdW50cnkuZGlhbENvZGV9YFxuICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgIC5pbmNsdWRlcyhzZWFyY2hDcml0ZXJpYS50b0xvd2VyQ2FzZSgpKTtcbiAgfVxufVxuIl19