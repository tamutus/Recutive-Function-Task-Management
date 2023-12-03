import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToTaskTemplatesWhereUniqueInputSchema } from './PrivateEnergiesToTaskTemplatesWhereUniqueInputSchema';
import { PrivateEnergiesToTaskTemplatesCreateWithoutTaskInputSchema } from './PrivateEnergiesToTaskTemplatesCreateWithoutTaskInputSchema';
import { PrivateEnergiesToTaskTemplatesUncheckedCreateWithoutTaskInputSchema } from './PrivateEnergiesToTaskTemplatesUncheckedCreateWithoutTaskInputSchema';

export const PrivateEnergiesToTaskTemplatesCreateOrConnectWithoutTaskInputSchema: z.ZodType<Prisma.PrivateEnergiesToTaskTemplatesCreateOrConnectWithoutTaskInput> = z.object({
  where: z.lazy(() => PrivateEnergiesToTaskTemplatesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PrivateEnergiesToTaskTemplatesCreateWithoutTaskInputSchema),z.lazy(() => PrivateEnergiesToTaskTemplatesUncheckedCreateWithoutTaskInputSchema) ]),
}).strict();

export default PrivateEnergiesToTaskTemplatesCreateOrConnectWithoutTaskInputSchema;
