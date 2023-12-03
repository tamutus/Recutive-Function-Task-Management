import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToPersonsWhereUniqueInputSchema } from './EnergiesToPersonsWhereUniqueInputSchema';
import { EnergiesToPersonsCreateWithoutMeasurementsInputSchema } from './EnergiesToPersonsCreateWithoutMeasurementsInputSchema';
import { EnergiesToPersonsUncheckedCreateWithoutMeasurementsInputSchema } from './EnergiesToPersonsUncheckedCreateWithoutMeasurementsInputSchema';

export const EnergiesToPersonsCreateOrConnectWithoutMeasurementsInputSchema: z.ZodType<Prisma.EnergiesToPersonsCreateOrConnectWithoutMeasurementsInput> = z.object({
  where: z.lazy(() => EnergiesToPersonsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => EnergiesToPersonsCreateWithoutMeasurementsInputSchema),z.lazy(() => EnergiesToPersonsUncheckedCreateWithoutMeasurementsInputSchema) ]),
}).strict();

export default EnergiesToPersonsCreateOrConnectWithoutMeasurementsInputSchema;
