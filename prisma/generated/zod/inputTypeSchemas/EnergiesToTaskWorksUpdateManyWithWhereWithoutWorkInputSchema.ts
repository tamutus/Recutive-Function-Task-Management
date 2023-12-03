import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTaskWorksScalarWhereInputSchema } from './EnergiesToTaskWorksScalarWhereInputSchema';
import { EnergiesToTaskWorksUpdateManyMutationInputSchema } from './EnergiesToTaskWorksUpdateManyMutationInputSchema';
import { EnergiesToTaskWorksUncheckedUpdateManyWithoutWorkInputSchema } from './EnergiesToTaskWorksUncheckedUpdateManyWithoutWorkInputSchema';

export const EnergiesToTaskWorksUpdateManyWithWhereWithoutWorkInputSchema: z.ZodType<Prisma.EnergiesToTaskWorksUpdateManyWithWhereWithoutWorkInput> = z.object({
  where: z.lazy(() => EnergiesToTaskWorksScalarWhereInputSchema),
  data: z.union([ z.lazy(() => EnergiesToTaskWorksUpdateManyMutationInputSchema),z.lazy(() => EnergiesToTaskWorksUncheckedUpdateManyWithoutWorkInputSchema) ]),
}).strict();

export default EnergiesToTaskWorksUpdateManyWithWhereWithoutWorkInputSchema;
