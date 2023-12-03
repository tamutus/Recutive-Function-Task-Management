import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToProjectTemplatesScalarWhereInputSchema } from './PrivateEnergiesToProjectTemplatesScalarWhereInputSchema';
import { PrivateEnergiesToProjectTemplatesUpdateManyMutationInputSchema } from './PrivateEnergiesToProjectTemplatesUpdateManyMutationInputSchema';
import { PrivateEnergiesToProjectTemplatesUncheckedUpdateManyWithoutEnergyInputSchema } from './PrivateEnergiesToProjectTemplatesUncheckedUpdateManyWithoutEnergyInputSchema';

export const PrivateEnergiesToProjectTemplatesUpdateManyWithWhereWithoutEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToProjectTemplatesUpdateManyWithWhereWithoutEnergyInput> = z.object({
  where: z.lazy(() => PrivateEnergiesToProjectTemplatesScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PrivateEnergiesToProjectTemplatesUpdateManyMutationInputSchema),z.lazy(() => PrivateEnergiesToProjectTemplatesUncheckedUpdateManyWithoutEnergyInputSchema) ]),
}).strict();

export default PrivateEnergiesToProjectTemplatesUpdateManyWithWhereWithoutEnergyInputSchema;
