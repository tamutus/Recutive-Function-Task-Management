import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTaskTemplatesCreateWithoutTaskInputSchema } from './EnergiesToTaskTemplatesCreateWithoutTaskInputSchema';
import { EnergiesToTaskTemplatesUncheckedCreateWithoutTaskInputSchema } from './EnergiesToTaskTemplatesUncheckedCreateWithoutTaskInputSchema';
import { EnergiesToTaskTemplatesCreateOrConnectWithoutTaskInputSchema } from './EnergiesToTaskTemplatesCreateOrConnectWithoutTaskInputSchema';
import { EnergiesToTaskTemplatesCreateManyTaskInputEnvelopeSchema } from './EnergiesToTaskTemplatesCreateManyTaskInputEnvelopeSchema';
import { EnergiesToTaskTemplatesWhereUniqueInputSchema } from './EnergiesToTaskTemplatesWhereUniqueInputSchema';

export const EnergiesToTaskTemplatesCreateNestedManyWithoutTaskInputSchema: z.ZodType<Prisma.EnergiesToTaskTemplatesCreateNestedManyWithoutTaskInput> = z.object({
  create: z.union([ z.lazy(() => EnergiesToTaskTemplatesCreateWithoutTaskInputSchema),z.lazy(() => EnergiesToTaskTemplatesCreateWithoutTaskInputSchema).array(),z.lazy(() => EnergiesToTaskTemplatesUncheckedCreateWithoutTaskInputSchema),z.lazy(() => EnergiesToTaskTemplatesUncheckedCreateWithoutTaskInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EnergiesToTaskTemplatesCreateOrConnectWithoutTaskInputSchema),z.lazy(() => EnergiesToTaskTemplatesCreateOrConnectWithoutTaskInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EnergiesToTaskTemplatesCreateManyTaskInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => EnergiesToTaskTemplatesWhereUniqueInputSchema),z.lazy(() => EnergiesToTaskTemplatesWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default EnergiesToTaskTemplatesCreateNestedManyWithoutTaskInputSchema;
