import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergyMeasurementScalarWhereInputSchema } from './EnergyMeasurementScalarWhereInputSchema';
import { EnergyMeasurementUpdateManyMutationInputSchema } from './EnergyMeasurementUpdateManyMutationInputSchema';
import { EnergyMeasurementUncheckedUpdateManyWithoutExperienceInputSchema } from './EnergyMeasurementUncheckedUpdateManyWithoutExperienceInputSchema';

export const EnergyMeasurementUpdateManyWithWhereWithoutExperienceInputSchema: z.ZodType<Prisma.EnergyMeasurementUpdateManyWithWhereWithoutExperienceInput> = z.object({
  where: z.lazy(() => EnergyMeasurementScalarWhereInputSchema),
  data: z.union([ z.lazy(() => EnergyMeasurementUpdateManyMutationInputSchema),z.lazy(() => EnergyMeasurementUncheckedUpdateManyWithoutExperienceInputSchema) ]),
}).strict();

export default EnergyMeasurementUpdateManyWithWhereWithoutExperienceInputSchema;
