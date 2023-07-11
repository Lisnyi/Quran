import { FC } from 'react'
import { ScrollView } from 'react-native';
import { InfoItem } from './InfoItem';
import { useTranslation } from '../../shared';
import type { Sura } from '../../types';

type Props = {
    details: Pick<Sura, 'arabianTitle' | 'chronologicalOrder' | 'numberOfAyats' | 'numberOfWords' | 'place'>
}

export const InfoList: FC<Props> = ({details}) => {

    const { arabianTitle, chronologicalOrder, numberOfAyats, numberOfWords, place } = details
    const translation = useTranslation()

    return (
        <ScrollView>
            <InfoItem category={translation.arabicName} value={arabianTitle} />
            <InfoItem category={translation.numberOfAyats} value={numberOfAyats} />
            <InfoItem category={translation.numberOfWords} value={numberOfWords} />
            <InfoItem category={translation.place} value={place} />
            <InfoItem category={translation.order} value={chronologicalOrder} mb={0}/>
        </ScrollView>
    )
}