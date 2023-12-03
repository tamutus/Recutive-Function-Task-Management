import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToProjectTemplatesScalarWhereInputSchema } from './EnergiesToProjectTemplatesScalarWhereInputSchema';
import { EnergiesToProjectTemplatesUpdateManyMutationInputSchema } from './EnergiesToProjectTemplatesUpdateManyMutationInputSchema';
import { EnergiesToProjectTemplatesUncheckedUpdateManyWithoutEnergyInputSchema } from './EnergiesToProjectTemplatesUncheckedUpdateManyWithoutEnergyInputSchema';

export const EnergiesToProjectTemplatesUpdateManyWithWhereWithoutEnergyInputSchema: z.ZodType<Prisma.EnergiesToProjectTemplatesUpdateManyWithWhereWithoutEnergyInput> = z.object({
  where: z.lazy(() => EnergiesToProjectTemplatesScalarWhereInputSchema),
  data: z.union([ z.lazy(() => EnergiesToProjectTemplatesUpdateManyMutationInputSchema),z.lazy(() => EnergiesToProjectTemplatesUncheckedUpdateManyWithoutEnergyInputSchema) ]),
}).strict();

export default EnergiesToProjectTemplatesUpdateManyWithWhereWithoutEnergyInputSchema;
