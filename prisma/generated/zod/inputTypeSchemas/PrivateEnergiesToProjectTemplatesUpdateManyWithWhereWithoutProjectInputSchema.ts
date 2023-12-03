import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToProjectTemplatesScalarWhereInputSchema } from './PrivateEnergiesToProjectTemplatesScalarWhereInputSchema';
import { PrivateEnergiesToProjectTemplatesUpdateManyMutationInputSchema } from './PrivateEnergiesToProjectTemplatesUpdateManyMutationInputSchema';
import { PrivateEnergiesToProjectTemplatesUncheckedUpdateManyWithoutProjectInputSchema } from './PrivateEnergiesToProjectTemplatesUncheckedUpdateManyWithoutProjectInputSchema';

export const PrivateEnergiesToProjectTemplatesUpdateManyWithWhereWithoutProjectInputSchema: z.ZodType<Prisma.PrivateEnergiesToProjectTemplatesUpdateManyWithWhereWithoutProjectInput> = z.object({
  where: z.lazy(() => PrivateEnergiesToProjectTemplatesScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PrivateEnergiesToProjectTemplatesUpdateManyMutationInputSchema),z.lazy(() => PrivateEnergiesToProjectTemplatesUncheckedUpdateManyWithoutProjectInputSchema) ]),
}).strict();

export default PrivateEnergiesToProjectTemplatesUpdateManyWithWhereWithoutProjectInputSchema;
