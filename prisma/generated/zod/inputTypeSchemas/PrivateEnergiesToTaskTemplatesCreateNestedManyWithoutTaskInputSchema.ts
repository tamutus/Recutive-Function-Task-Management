import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToTaskTemplatesCreateWithoutTaskInputSchema } from './PrivateEnergiesToTaskTemplatesCreateWithoutTaskInputSchema';
import { PrivateEnergiesToTaskTemplatesUncheckedCreateWithoutTaskInputSchema } from './PrivateEnergiesToTaskTemplatesUncheckedCreateWithoutTaskInputSchema';
import { PrivateEnergiesToTaskTemplatesCreateOrConnectWithoutTaskInputSchema } from './PrivateEnergiesToTaskTemplatesCreateOrConnectWithoutTaskInputSchema';
import { PrivateEnergiesToTaskTemplatesCreateManyTaskInputEnvelopeSchema } from './PrivateEnergiesToTaskTemplatesCreateManyTaskInputEnvelopeSchema';
import { PrivateEnergiesToTaskTemplatesWhereUniqueInputSchema } from './PrivateEnergiesToTaskTemplatesWhereUniqueInputSchema';

export const PrivateEnergiesToTaskTemplatesCreateNestedManyWithoutTaskInputSchema: z.ZodType<Prisma.PrivateEnergiesToTaskTemplatesCreateNestedManyWithoutTaskInput> = z.object({
  create: z.union([ z.lazy(() => PrivateEnergiesToTaskTemplatesCreateWithoutTaskInputSchema),z.lazy(() => PrivateEnergiesToTaskTemplatesCreateWithoutTaskInputSchema).array(),z.lazy(() => PrivateEnergiesToTaskTemplatesUncheckedCreateWithoutTaskInputSchema),z.lazy(() => PrivateEnergiesToTaskTemplatesUncheckedCreateWithoutTaskInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrivateEnergiesToTaskTemplatesCreateOrConnectWithoutTaskInputSchema),z.lazy(() => PrivateEnergiesToTaskTemplatesCreateOrConnectWithoutTaskInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrivateEnergiesToTaskTemplatesCreateManyTaskInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PrivateEnergiesToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PrivateEnergiesToTaskTemplatesCreateNestedManyWithoutTaskInputSchema;
