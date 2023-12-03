import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToPersonsCreateWithoutMeasurementsInputSchema } from './EnergiesToPersonsCreateWithoutMeasurementsInputSchema';
import { EnergiesToPersonsUncheckedCreateWithoutMeasurementsInputSchema } from './EnergiesToPersonsUncheckedCreateWithoutMeasurementsInputSchema';
import { EnergiesToPersonsCreateOrConnectWithoutMeasurementsInputSchema } from './EnergiesToPersonsCreateOrConnectWithoutMeasurementsInputSchema';
import { EnergiesToPersonsWhereUniqueInputSchema } from './EnergiesToPersonsWhereUniqueInputSchema';

export const EnergiesToPersonsCreateNestedOneWithoutMeasurementsInputSchema: z.ZodType<Prisma.EnergiesToPersonsCreateNestedOneWithoutMeasurementsInput> = z.object({
  create: z.union([ z.lazy(() => EnergiesToPersonsCreateWithoutMeasurementsInputSchema),z.lazy(() => EnergiesToPersonsUncheckedCreateWithoutMeasurementsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => EnergiesToPersonsCreateOrConnectWithoutMeasurementsInputSchema).optional(),
  connect: z.lazy(() => EnergiesToPersonsWhereUniqueInputSchema).optional()
}).strict();

export default EnergiesToPersonsCreateNestedOneWithoutMeasurementsInputSchema;
