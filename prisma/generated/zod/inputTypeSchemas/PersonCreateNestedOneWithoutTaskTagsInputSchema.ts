import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonCreateWithoutTaskTagsInputSchema } from './PersonCreateWithoutTaskTagsInputSchema';
import { PersonUncheckedCreateWithoutTaskTagsInputSchema } from './PersonUncheckedCreateWithoutTaskTagsInputSchema';
import { PersonCreateOrConnectWithoutTaskTagsInputSchema } from './PersonCreateOrConnectWithoutTaskTagsInputSchema';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';

export const PersonCreateNestedOneWithoutTaskTagsInputSchema: z.ZodType<Prisma.PersonCreateNestedOneWithoutTaskTagsInput> = z.object({
  create: z.union([ z.lazy(() => PersonCreateWithoutTaskTagsInputSchema),z.lazy(() => PersonUncheckedCreateWithoutTaskTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutTaskTagsInputSchema).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional()
}).strict();

export default PersonCreateNestedOneWithoutTaskTagsInputSchema;
