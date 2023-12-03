import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonCreateWithoutPrivateTagsInputSchema } from './PersonCreateWithoutPrivateTagsInputSchema';
import { PersonUncheckedCreateWithoutPrivateTagsInputSchema } from './PersonUncheckedCreateWithoutPrivateTagsInputSchema';
import { PersonCreateOrConnectWithoutPrivateTagsInputSchema } from './PersonCreateOrConnectWithoutPrivateTagsInputSchema';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';

export const PersonCreateNestedOneWithoutPrivateTagsInputSchema: z.ZodType<Prisma.PersonCreateNestedOneWithoutPrivateTagsInput> = z.object({
  create: z.union([ z.lazy(() => PersonCreateWithoutPrivateTagsInputSchema),z.lazy(() => PersonUncheckedCreateWithoutPrivateTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutPrivateTagsInputSchema).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional()
}).strict();

export default PersonCreateNestedOneWithoutPrivateTagsInputSchema;
