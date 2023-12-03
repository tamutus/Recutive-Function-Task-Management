import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToPersonsCreateWithoutMeasurementsInputSchema } from './EnergiesToPersonsCreateWithoutMeasurementsInputSchema';
import { EnergiesToPersonsUncheckedCreateWithoutMeasurementsInputSchema } from './EnergiesToPersonsUncheckedCreateWithoutMeasurementsInputSchema';
import { EnergiesToPersonsCreateOrConnectWithoutMeasurementsInputSchema } from './EnergiesToPersonsCreateOrConnectWithoutMeasurementsInputSchema';
import { EnergiesToPersonsUpsertWithoutMeasurementsInputSchema } from './EnergiesToPersonsUpsertWithoutMeasurementsInputSchema';
import { EnergiesToPersonsWhereUniqueInputSchema } from './EnergiesToPersonsWhereUniqueInputSchema';
import { EnergiesToPersonsUpdateToOneWithWhereWithoutMeasurementsInputSchema } from './EnergiesToPersonsUpdateToOneWithWhereWithoutMeasurementsInputSchema';
import { EnergiesToPersonsUpdateWithoutMeasurementsInputSchema } from './EnergiesToPersonsUpdateWithoutMeasurementsInputSchema';
import { EnergiesToPersonsUncheckedUpdateWithoutMeasurementsInputSchema } from './EnergiesToPersonsUncheckedUpdateWithoutMeasurementsInputSchema';

export const EnergiesToPersonsUpdateOneRequiredWithoutMeasurementsNestedInputSchema: z.ZodType<Prisma.EnergiesToPersonsUpdateOneRequiredWithoutMeasurementsNestedInput> = z.object({
  create: z.union([ z.lazy(() => EnergiesToPersonsCreateWithoutMeasurementsInputSchema),z.lazy(() => EnergiesToPersonsUncheckedCreateWithoutMeasurementsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => EnergiesToPersonsCreateOrConnectWithoutMeasurementsInputSchema).optional(),
  upsert: z.lazy(() => EnergiesToPersonsUpsertWithoutMeasurementsInputSchema).optional(),
  connect: z.lazy(() => EnergiesToPersonsWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => EnergiesToPersonsUpdateToOneWithWhereWithoutMeasurementsInputSchema),z.lazy(() => EnergiesToPersonsUpdateWithoutMeasurementsInputSchema),z.lazy(() => EnergiesToPersonsUncheckedUpdateWithoutMeasurementsInputSchema) ]).optional(),
}).strict();

export default EnergiesToPersonsUpdateOneRequiredWithoutMeasurementsNestedInputSchema;
