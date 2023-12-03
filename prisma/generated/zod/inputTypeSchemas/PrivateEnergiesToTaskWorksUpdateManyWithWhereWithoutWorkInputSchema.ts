import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToTaskWorksScalarWhereInputSchema } from './PrivateEnergiesToTaskWorksScalarWhereInputSchema';
import { PrivateEnergiesToTaskWorksUpdateManyMutationInputSchema } from './PrivateEnergiesToTaskWorksUpdateManyMutationInputSchema';
import { PrivateEnergiesToTaskWorksUncheckedUpdateManyWithoutWorkInputSchema } from './PrivateEnergiesToTaskWorksUncheckedUpdateManyWithoutWorkInputSchema';

export const PrivateEnergiesToTaskWorksUpdateManyWithWhereWithoutWorkInputSchema: z.ZodType<Prisma.PrivateEnergiesToTaskWorksUpdateManyWithWhereWithoutWorkInput> = z.object({
  where: z.lazy(() => PrivateEnergiesToTaskWorksScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PrivateEnergiesToTaskWorksUpdateManyMutationInputSchema),z.lazy(() => PrivateEnergiesToTaskWorksUncheckedUpdateManyWithoutWorkInputSchema) ]),
}).strict();

export default PrivateEnergiesToTaskWorksUpdateManyWithWhereWithoutWorkInputSchema;
