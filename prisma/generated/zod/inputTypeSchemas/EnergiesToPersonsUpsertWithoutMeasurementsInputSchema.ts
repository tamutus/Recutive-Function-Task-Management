import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToPersonsUpdateWithoutMeasurementsInputSchema } from './EnergiesToPersonsUpdateWithoutMeasurementsInputSchema';
import { EnergiesToPersonsUncheckedUpdateWithoutMeasurementsInputSchema } from './EnergiesToPersonsUncheckedUpdateWithoutMeasurementsInputSchema';
import { EnergiesToPersonsCreateWithoutMeasurementsInputSchema } from './EnergiesToPersonsCreateWithoutMeasurementsInputSchema';
import { EnergiesToPersonsUncheckedCreateWithoutMeasurementsInputSchema } from './EnergiesToPersonsUncheckedCreateWithoutMeasurementsInputSchema';
import { EnergiesToPersonsWhereInputSchema } from './EnergiesToPersonsWhereInputSchema';

export const EnergiesToPersonsUpsertWithoutMeasurementsInputSchema: z.ZodType<Prisma.EnergiesToPersonsUpsertWithoutMeasurementsInput> = z.object({
  update: z.union([ z.lazy(() => EnergiesToPersonsUpdateWithoutMeasurementsInputSchema),z.lazy(() => EnergiesToPersonsUncheckedUpdateWithoutMeasurementsInputSchema) ]),
  create: z.union([ z.lazy(() => EnergiesToPersonsCreateWithoutMeasurementsInputSchema),z.lazy(() => EnergiesToPersonsUncheckedCreateWithoutMeasurementsInputSchema) ]),
  where: z.lazy(() => EnergiesToPersonsWhereInputSchema).optional()
}).strict();

export default EnergiesToPersonsUpsertWithoutMeasurementsInputSchema;
