import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToPersonsWhereInputSchema } from './EnergiesToPersonsWhereInputSchema';
import { EnergiesToPersonsUpdateWithoutMeasurementsInputSchema } from './EnergiesToPersonsUpdateWithoutMeasurementsInputSchema';
import { EnergiesToPersonsUncheckedUpdateWithoutMeasurementsInputSchema } from './EnergiesToPersonsUncheckedUpdateWithoutMeasurementsInputSchema';

export const EnergiesToPersonsUpdateToOneWithWhereWithoutMeasurementsInputSchema: z.ZodType<Prisma.EnergiesToPersonsUpdateToOneWithWhereWithoutMeasurementsInput> = z.object({
  where: z.lazy(() => EnergiesToPersonsWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => EnergiesToPersonsUpdateWithoutMeasurementsInputSchema),z.lazy(() => EnergiesToPersonsUncheckedUpdateWithoutMeasurementsInputSchema) ]),
}).strict();

export default EnergiesToPersonsUpdateToOneWithWhereWithoutMeasurementsInputSchema;
