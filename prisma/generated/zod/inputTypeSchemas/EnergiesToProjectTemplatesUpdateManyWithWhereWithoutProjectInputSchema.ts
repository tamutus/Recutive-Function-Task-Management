import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToProjectTemplatesScalarWhereInputSchema } from './EnergiesToProjectTemplatesScalarWhereInputSchema';
import { EnergiesToProjectTemplatesUpdateManyMutationInputSchema } from './EnergiesToProjectTemplatesUpdateManyMutationInputSchema';
import { EnergiesToProjectTemplatesUncheckedUpdateManyWithoutProjectInputSchema } from './EnergiesToProjectTemplatesUncheckedUpdateManyWithoutProjectInputSchema';

export const EnergiesToProjectTemplatesUpdateManyWithWhereWithoutProjectInputSchema: z.ZodType<Prisma.EnergiesToProjectTemplatesUpdateManyWithWhereWithoutProjectInput> = z.object({
  where: z.lazy(() => EnergiesToProjectTemplatesScalarWhereInputSchema),
  data: z.union([ z.lazy(() => EnergiesToProjectTemplatesUpdateManyMutationInputSchema),z.lazy(() => EnergiesToProjectTemplatesUncheckedUpdateManyWithoutProjectInputSchema) ]),
}).strict();

export default EnergiesToProjectTemplatesUpdateManyWithWhereWithoutProjectInputSchema;
