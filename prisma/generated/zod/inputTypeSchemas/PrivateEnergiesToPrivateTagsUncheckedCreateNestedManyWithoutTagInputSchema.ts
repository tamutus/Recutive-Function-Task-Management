import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToPrivateTagsCreateWithoutTagInputSchema } from './PrivateEnergiesToPrivateTagsCreateWithoutTagInputSchema';
import { PrivateEnergiesToPrivateTagsUncheckedCreateWithoutTagInputSchema } from './PrivateEnergiesToPrivateTagsUncheckedCreateWithoutTagInputSchema';
import { PrivateEnergiesToPrivateTagsCreateOrConnectWithoutTagInputSchema } from './PrivateEnergiesToPrivateTagsCreateOrConnectWithoutTagInputSchema';
import { PrivateEnergiesToPrivateTagsCreateManyTagInputEnvelopeSchema } from './PrivateEnergiesToPrivateTagsCreateManyTagInputEnvelopeSchema';
import { PrivateEnergiesToPrivateTagsWhereUniqueInputSchema } from './PrivateEnergiesToPrivateTagsWhereUniqueInputSchema';

export const PrivateEnergiesToPrivateTagsUncheckedCreateNestedManyWithoutTagInputSchema: z.ZodType<Prisma.PrivateEnergiesToPrivateTagsUncheckedCreateNestedManyWithoutTagInput> = z.object({
  create: z.union([ z.lazy(() => PrivateEnergiesToPrivateTagsCreateWithoutTagInputSchema),z.lazy(() => PrivateEnergiesToPrivateTagsCreateWithoutTagInputSchema).array(),z.lazy(() => PrivateEnergiesToPrivateTagsUncheckedCreateWithoutTagInputSchema),z.lazy(() => PrivateEnergiesToPrivateTagsUncheckedCreateWithoutTagInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrivateEnergiesToPrivateTagsCreateOrConnectWithoutTagInputSchema),z.lazy(() => PrivateEnergiesToPrivateTagsCreateOrConnectWithoutTagInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrivateEnergiesToPrivateTagsCreateManyTagInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PrivateEnergiesToPrivateTagsWhereUniqueInputSchema),z.lazy(() => PrivateEnergiesToPrivateTagsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PrivateEnergiesToPrivateTagsUncheckedCreateNestedManyWithoutTagInputSchema;
