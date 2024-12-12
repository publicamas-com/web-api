import {Column, Entity, Index, JoinColumn, OneToOne} from 'typeorm';
import {PublicamasEntity} from '../../publicamas.entity';
import {PublicationEntity} from './publication.entity';

@Entity('Publication_Field_Values')
export class PublicationFieldValuesEntity extends PublicamasEntity {
    constructor() {
        super();
    }

    @OneToOne(() => PublicationEntity)
    @JoinColumn({name: 'publication_id'})
    @Index()
    publication: PublicationEntity;

    @Column({name: 'publication_id', nullable: false})
    publicationId: string;

    @Column({name: 'field_1', nullable: true})
    field1: string;

    @Column({name: 'field_2', nullable: true})
    field2: string;

    @Column({name: 'field_3', nullable: true})
    field3: string;

    @Column({name: 'field_4', nullable: true})
    field4: string;

    @Column({name: 'field_5', nullable: true})
    field5: string;

    @Column({name: 'field_6', nullable: true})
    field6: string;

    @Column({name: 'field_7', nullable: true})
    field7: string;

    @Column({name: 'field_8', nullable: true})
    field8: string;

    @Column({name: 'field_9', nullable: true})
    field9: string;

    @Column({name: 'field_10', nullable: true})
    field10: string;

    // Continue this pattern for fields 11 to 100
    @Column({name: 'field_11', nullable: true})
    field11: string;

    @Column({name: 'field_12', nullable: true})
    field12: string;

    @Column({name: 'field_13', nullable: true})
    field13: string;

    @Column({name: 'field_14', nullable: true})
    field14: string;

    @Column({name: 'field_15', nullable: true})
    field15: string;

    @Column({name: 'field_16', nullable: true})
    field16: string;

    @Column({name: 'field_17', nullable: true})
    field17: string;

    @Column({name: 'field_18', nullable: true})
    field18: string;

    @Column({name: 'field_19', nullable: true})
    field19: string;

    @Column({name: 'field_20', nullable: true})
    field20: string;

    // ... Continue until field100
    @Column({name: 'field_21', nullable: true})
    field21: string;

    @Column({name: 'field_22', nullable: true})
    field22: string;

    @Column({name: 'field_23', nullable: true})
    field23: string;

    @Column({name: 'field_24', nullable: true})
    field24: string;

    @Column({name: 'field_25', nullable: true})
    field25: string;

    @Column({name: 'field_26', nullable: true})
    field26: string;

    @Column({name: 'field_27', nullable: true})
    field27: string;

    @Column({name: 'field_28', nullable: true})
    field28: string;

    @Column({name: 'field_29', nullable: true})
    field29: string;

    @Column({name: 'field_30', nullable: true})
    field30: string;

    @Column({name: 'field_31', nullable: true})
    field31: string;

    @Column({name: 'field_32', nullable: true})
    field32: string;

    @Column({name: 'field_33', nullable: true})
    field33: string;

    @Column({name: 'field_34', nullable: true})
    field34: string;

    @Column({name: 'field_35', nullable: true})
    field35: string;

    @Column({name: 'field_36', nullable: true})
    field36: string;

    @Column({name: 'field_37', nullable: true})
    field37: string;

    @Column({name: 'field_38', nullable: true})
    field38: string;

    @Column({name: 'field_39', nullable: true})
    field39: string;

    @Column({name: 'field_40', nullable: true})
    field40: string;

    @Column({name: 'field_41', nullable: true})
    field41: string;

    @Column({name: 'field_42', nullable: true})
    field42: string;

    @Column({name: 'field_43', nullable: true})
    field43: string;

    @Column({name: 'field_44', nullable: true})
    field44: string;

    @Column({name: 'field_45', nullable: true})
    field45: string;

    @Column({name: 'field_46', nullable: true})
    field46: string;

    @Column({name: 'field_47', nullable: true})
    field47: string;

    @Column({name: 'field_48', nullable: true})
    field48: string;

    @Column({name: 'field_49', nullable: true})
    field49: string;

    @Column({name: 'field_50', nullable: true})
    field50: string;

    @Column({name: 'field_51', nullable: true})
    field51: string;

    @Column({name: 'field_52', nullable: true})
    field52: string;

    @Column({name: 'field_53', nullable: true})
    field53: string;

    @Column({name: 'field_54', nullable: true})
    field54: string;

    @Column({name: 'field_55', nullable: true})
    field55: string;

    @Column({name: 'field_56', nullable: true})
    field56: string;

    @Column({name: 'field_57', nullable: true})
    field57: string;

    @Column({name: 'field_58', nullable: true})
    field58: string;

    @Column({name: 'field_59', nullable: true})
    field59: string;

    @Column({name: 'field_60', nullable: true})
    field60: string;

    @Column({name: 'field_61', nullable: true})
    field61: string;

    @Column({name: 'field_62', nullable: true})
    field62: string;

    @Column({name: 'field_63', nullable: true})
    field63: string;

    @Column({name: 'field_64', nullable: true})
    field64: string;

    @Column({name: 'field_65', nullable: true})
    field65: string;

    @Column({name: 'field_66', nullable: true})
    field66: string;

    @Column({name: 'field_67', nullable: true})
    field67: string;

    @Column({name: 'field_68', nullable: true})
    field68: string;

    @Column({name: 'field_69', nullable: true})
    field69: string;

    @Column({name: 'field_70', nullable: true})
    field70: string;

    @Column({name: 'field_71', nullable: true})
    field71: string;

    @Column({name: 'field_72', nullable: true})
    field72: string;

    @Column({name: 'field_73', nullable: true})
    field73: string;

    @Column({name: 'field_74', nullable: true})
    field74: string;

    @Column({name: 'field_75', nullable: true})
    field75: string;

    @Column({name: 'field_76', nullable: true})
    field76: string;

    @Column({name: 'field_77', nullable: true})
    field77: string;

    @Column({name: 'field_78', nullable: true})
    field78: string;

    @Column({name: 'field_79', nullable: true})
    field79: string;

    @Column({name: 'field_80', nullable: true})
    field80: string;

    @Column({name: 'field_81', nullable: true})
    field81: string;

    @Column({name: 'field_82', nullable: true})
    field82: string;

    @Column({name: 'field_83', nullable: true})
    field83: string;

    @Column({name: 'field_84', nullable: true})
    field84: string;

    @Column({name: 'field_85', nullable: true})
    field85: string;

    @Column({name: 'field_86', nullable: true})
    field86: string;

    @Column({name: 'field_87', nullable: true})
    field87: string;

    @Column({name: 'field_88', nullable: true})
    field88: string;

    @Column({name: 'field_89', nullable: true})
    field89: string;

    @Column({name: 'field_90', nullable: true})
    field90: string;

    @Column({name: 'field_91', nullable: true})
    field91: string;

    @Column({name: 'field_92', nullable: true})
    field92: string;

    @Column({name: 'field_93', nullable: true})
    field93: string;

    @Column({name: 'field_94', nullable: true})
    field94: string;

    @Column({name: 'field_95', nullable: true})
    field95: string;

    @Column({name: 'field_96', nullable: true})
    field96: string;

    @Column({name: 'field_97', nullable: true})
    field97: string;

    @Column({name: 'field_98', nullable: true})
    field98: string;

    @Column({name: 'field_99', nullable: true})
    field99: string;

    @Column({name: 'field_100', nullable: true})
    field100: string;
}